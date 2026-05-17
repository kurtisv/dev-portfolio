"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { prisma } from "@/lib/db";
import { publishEcosystemEvent } from "@/lib/ecosystem";

const DEMO_FLOW_ID = "flow-kv-portfolio-demo";

export async function resetDemoScenario() {
  const existingEvents = await prisma.ecosystemEvent.findMany({
    where: { flowId: DEMO_FLOW_ID },
    select: { id: true },
  });
  const eventIds = existingEvents.map((event) => event.id);

  await prisma.$transaction([
    prisma.ecosystemEntityLink.deleteMany({ where: { flowId: DEMO_FLOW_ID } }),
    ...(eventIds.length > 0
      ? [prisma.ecosystemNotification.deleteMany({ where: { eventId: { in: eventIds } } })]
      : []),
    prisma.ecosystemEvent.deleteMany({ where: { flowId: DEMO_FLOW_ID } }),
  ]);

  await publishEcosystemEvent({
    flowId: DEMO_FLOW_ID,
    sourceApp: "luma-studio",
    targetApp: "quotepilot",
    eventType: "lead.created",
    entityType: "lead",
    entityId: "kv-portfolio-demo-lead",
    customerName: "Camille Moreau",
    customerEmail: "camille.demo@kvportfolio.dev",
    title: "Nouveau lead depuis Luma Studio",
    description: "Camille Moreau demande une refonte d'un studio creatif avec un budget de 4 850 $.",
    payload: {
      scenarioName: "KV Portfolio Demo Flow",
      projectType: "Refonte d'un studio creatif",
      budgetRange: "4 850 $",
      message:
        "Nous voulons moderniser un studio creatif sans perdre son caractere. Besoin de clarifier les zones client, atelier et presentation.",
      sourceLabel: "Luma Studio",
      nextStep: "Creer une soumission QuotePilot",
    },
    notificationTitle: "Lead Luma Studio pret a convertir",
    notificationMessage: "Camille Moreau attend une soumission QuotePilot pour le scenario demo KV Portfolio.",
    priority: "HIGH",
    actionLabel: "Ouvrir QuotePilot",
    actionUrl: "/dashboard",
  });

  revalidatePath("/");
  redirect("/?demoReset=1#test-system");
}
