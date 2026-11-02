import { aspectsFor } from "./aspects"
import type { Direction, Person, Project, Review, Scores, Task } from "./types"

export const PROJECTS: Project[] = [
  { id: "portal", name: "Client portal", color: "#315c8a" },
  { id: "field", name: "Field app", color: "#2c6b4a" },
  { id: "billing", name: "Billing", color: "#a24b24" },
]

export const PEOPLE: Person[] = [
  { id: "ana", name: "Ana Ruiz", role: "PM" },
  { id: "martin", name: "Martin Lopez", role: "PM" },
  { id: "lucia", name: "Lucia Fernandez", role: "Dev" },
  { id: "diego", name: "Diego Castro", role: "Dev" },
  { id: "sofia", name: "Sofia Mendez", role: "Dev" },
  { id: "joaquin", name: "Joaquin Pereyra", role: "Dev" },
]

type SeedReview = {
  direction: Direction
  scores: [number, number, number]
  detail: string
}

type SeedTask = Task & {
  reviews?: SeedReview[]
}

const SEED: SeedTask[] = [
  {
    id: "client-onboarding",
    title: "Adjust the client onboarding flow",
    summary: "Onboarding had to accept clients without a tax ID and save a draft when a field was missing.",
    projectId: "portal",
    devId: "lucia",
    pmId: "ana",
    status: "completed",
    startedAt: "2026-09-28",
    completedAt: "2026-10-08",
    reviews: [
      {
        direction: "pm_to_dev",
        scores: [5, 4, 5],
        detail: "Delivered the full flow and flagged when the validation criteria changed.",
      },
      {
        direction: "dev_to_pm",
        scores: [5, 4, 5],
        detail: "Scope was written in the task and questions were answered the same day.",
      },
    ],
  },
  {
    id: "tax-calculation",
    title: "Fix the tax calculation",
    summary: "VAT rounding did not match billing on amounts with discounts.",
    projectId: "billing",
    devId: "diego",
    pmId: "martin",
    status: "completed",
    startedAt: "2026-09-21",
    completedAt: "2026-10-02",
    reviews: [
      {
        direction: "pm_to_dev",
        scores: [4, 3, 2],
        detail: "The calculation ended up correct, but they did not say they were blocked by the rounding rule.",
      },
      {
        direction: "dev_to_pm",
        scores: [3, 4, 3],
        detail: "The rounding rule was not in scope. It was settled halfway through the task.",
      },
    ],
  },
  {
    id: "day-route",
    title: "Build the day's route screen",
    summary: "The screen had to sort visits and show which ones were still pending.",
    projectId: "field",
    devId: "sofia",
    pmId: "ana",
    status: "completed",
    startedAt: "2026-09-14",
    completedAt: "2026-09-28",
    reviews: [
      {
        direction: "pm_to_dev",
        scores: [5, 5, 4],
        detail: "The screen shipped on time and design follow-up was orderly.",
      },
      {
        direction: "dev_to_pm",
        scores: [4, 5, 5],
        detail: "There were a couple of empty-state questions, but the rest of the scope was clear.",
      },
    ],
  },
  {
    id: "csv",
    title: "Export the invoices CSV",
    summary: "The file had to use the same fields administration uses for collections.",
    projectId: "billing",
    devId: "joaquin",
    pmId: "martin",
    status: "completed",
    startedAt: "2026-09-08",
    completedAt: "2026-09-18",
    reviews: [
      {
        direction: "pm_to_dev",
        scores: [4, 4, 4],
        detail: "The export came out correct. The back-and-forth was short and enough.",
      },
    ],
  },
  {
    id: "push",
    title: "Send visit push notifications",
    summary: "The client had to be notified when the technician was one visit away.",
    projectId: "field",
    devId: "lucia",
    pmId: "ana",
    status: "completed",
    startedAt: "2026-08-31",
    completedAt: "2026-09-12",
    reviews: [
      {
        direction: "pm_to_dev",
        scores: [4, 3, 3],
        detail: "The feature turned out fine, but the push-provider blocker was discovered late.",
      },
      {
        direction: "dev_to_pm",
        scores: [2, 3, 4],
        detail: "Scope changed twice and the second version was never written in the task.",
      },
    ],
  },
  {
    id: "permissions",
    title: "Define role-based permissions in the portal",
    summary: "Admin, operator, and read-only had to see different screens.",
    projectId: "portal",
    devId: "diego",
    pmId: "ana",
    status: "completed",
    startedAt: "2026-08-04",
    completedAt: "2026-08-22",
    reviews: [
      {
        direction: "pm_to_dev",
        scores: [5, 4, 5],
        detail: "Covered the requested roles and left clear notes on the task.",
      },
      {
        direction: "dev_to_pm",
        scores: [5, 4, 4],
        detail: "Permission scope was locked before kickoff.",
      },
    ],
  },
  {
    id: "payment-reconciliation",
    title: "Reconcile partial payments",
    summary: "A payment could cover part of an invoice and leave the balance open.",
    projectId: "billing",
    devId: "sofia",
    pmId: "martin",
    status: "completed",
    startedAt: "2026-07-22",
    completedAt: "2026-08-05",
    reviews: [
      {
        direction: "pm_to_dev",
        scores: [3, 3, 4],
        detail: "The main case works. Partial payments were not tested and the task had to be reopened.",
      },
      {
        direction: "dev_to_pm",
        scores: [4, 3, 3],
        detail: "The goal was clear. Edge cases arrived once development was already underway.",
      },
    ],
  },
  {
    id: "offline-map",
    title: "Make the map available offline",
    summary: "The day's route had to stay visible even if the phone lost signal.",
    projectId: "field",
    devId: "joaquin",
    pmId: "ana",
    status: "completed",
    startedAt: "2026-09-29",
    completedAt: "2026-10-11",
  },
  {
    id: "client-filters",
    title: "Add filters to the client list",
    summary: "The list had to filter by status, salesperson, and last purchase.",
    projectId: "portal",
    devId: "lucia",
    pmId: "martin",
    status: "completed",
    startedAt: "2026-10-06",
    completedAt: "2026-10-13",
  },
  {
    id: "credit-note",
    title: "Issue a partial credit note",
    summary: "An already issued invoice had to be voidable for part of the amount.",
    projectId: "billing",
    devId: "diego",
    pmId: "martin",
    status: "in_progress",
    startedAt: "2026-10-06",
    completedAt: null,
  },
  {
    id: "visit-signature",
    title: "Request a digital signature on the visit",
    summary: "The client had to sign on the phone when closing the visit.",
    projectId: "field",
    devId: "sofia",
    pmId: "ana",
    status: "in_progress",
    startedAt: "2026-10-09",
    completedAt: null,
  },
  {
    id: "price-history",
    title: "Save the price-change history",
    summary: "Every price change had to keep date, user, and previous value.",
    projectId: "billing",
    devId: "joaquin",
    pmId: "martin",
    status: "completed",
    startedAt: "2026-07-14",
    completedAt: "2026-07-30",
    reviews: [
      {
        direction: "pm_to_dev",
        scores: [4, 2, 3],
        detail: "The history works. There was almost no update until delivery day.",
      },
      {
        direction: "dev_to_pm",
        scores: [3, 2, 3],
        detail: "Fields were added at the end and the scope change had no follow-up.",
      },
    ],
  },
  {
    id: "onboarding",
    title: "Simplify onboarding for a new user",
    summary: "A new user had to reach their first task in few steps.",
    projectId: "portal",
    devId: "lucia",
    pmId: "ana",
    status: "completed",
    startedAt: "2026-07-01",
    completedAt: "2026-07-15",
    reviews: [
      {
        direction: "pm_to_dev",
        scores: [3, 2, 3],
        detail: "Status had to be asked for several times. Scope kept sliding without notice.",
      },
      {
        direction: "dev_to_pm",
        scores: [3, 3, 4],
        detail: "The first scope version was short. Questions were answered, though late.",
      },
    ],
  },
  {
    id: "sync",
    title: "Sync stock with the portal",
    summary: "Warehouse stock had to match what the portal shows.",
    projectId: "portal",
    devId: "diego",
    pmId: "ana",
    status: "completed",
    startedAt: "2026-08-18",
    completedAt: "2026-09-02",
    reviews: [
      {
        direction: "pm_to_dev",
        scores: [4, 4, 4],
        detail: "Sync ended up stable. They flagged when the response shape changed.",
      },
      {
        direction: "dev_to_pm",
        scores: [4, 4, 5],
        detail: "It was written which fields to sync and what to do if the endpoint fails.",
      },
    ],
  },
  {
    id: "overdue-alerts",
    title: "Email when an invoice is overdue",
    summary: "An overdue invoice had to trigger an email to the collections contact.",
    projectId: "billing",
    devId: "lucia",
    pmId: "martin",
    status: "completed",
    startedAt: "2026-08-06",
    completedAt: "2026-08-20",
    reviews: [
      {
        direction: "pm_to_dev",
        scores: [4, 2, 3],
        detail: "Delivered the alerts, but went quiet for several days and the cron was wrong without notice.",
      },
      {
        direction: "dev_to_pm",
        scores: [4, 3, 4],
        detail: "Email scope was clear. Missing was a reply about the send schedule.",
      },
    ],
  },
  {
    id: "october-site",
    title: "Launch the October marketing site",
    summary: "Two developers share the WordPress build while the PM tracks go-live.",
    projectId: "portal",
    devId: "lucia",
    pmId: "ana",
    devIds: ["lucia", "diego"],
    pmIds: ["ana"],
    status: "in_progress",
    startedAt: "2026-10-10",
    completedAt: null,
  },
]

function toTask(item: SeedTask): Task {
  return {
    id: item.id,
    title: item.title,
    summary: item.summary,
    projectId: item.projectId,
    devId: item.devId,
    pmId: item.pmId,
    devIds: item.devIds?.length ? item.devIds : [item.devId],
    pmIds: item.pmIds?.length ? item.pmIds : [item.pmId],
    assigneeIds: item.assigneeIds?.length ? item.assigneeIds : [item.devId, item.pmId],
    status: item.status,
    startedAt: item.startedAt,
    completedAt: item.completedAt,
  }
}

function toReview(task: SeedTask, item: SeedReview): Review {
  const aspects = aspectsFor(item.direction)
  const scores: Scores = {}
  aspects.forEach((aspect, index) => {
    scores[aspect.id] = item.scores[index]
  })
  const raterId = item.direction === "pm_to_dev" ? task.pmId : task.devId
  const rateeId = item.direction === "pm_to_dev" ? task.devId : task.pmId
  return {
    id: `${task.id}:${item.direction}:${raterId}:${rateeId}`,
    taskId: task.id,
    direction: item.direction,
    raterId,
    rateeId,
    scores,
    detail: item.detail,
    createdAt: task.completedAt ?? task.startedAt,
  }
}

export const TASKS: Task[] = SEED.map(toTask)

export const SEED_REVIEWS: Review[] = SEED.flatMap((task) => (task.reviews ?? []).map((item) => toReview(task, item)))

export function personById(id: string): Person {
  const found = PEOPLE.find((person) => person.id === id)
  if (!found) throw new Error(`Unknown person: ${id}`)
  return found
}

export function projectById(id: string): Project {
  const found = PROJECTS.find((project) => project.id === id)
  if (!found) throw new Error(`Unknown project: ${id}`)
  return found
}

export function taskById(id: string): Task {
  const found = TASKS.find((task) => task.id === id)
  if (!found) throw new Error(`Unknown task: ${id}`)
  return found
}
