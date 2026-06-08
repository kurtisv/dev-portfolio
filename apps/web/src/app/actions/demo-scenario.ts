"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { prisma } from "@/lib/db";

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

  revalidatePath("/");
  redirect("/?demoReset=1#test-system");
}
