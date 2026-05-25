import { ensureListSeed, listPgPayloads, replacePgPayloads } from '@/lib/postgres';

export type NotificationItem = {
  id: string;
  title: string;
  detail: string;
  read: boolean;
};

const seed: NotificationItem[] = [
  { id: 'note-1', title: 'Expense risk spike', detail: 'Three new high-risk expense items need review.', read: false },
  { id: 'note-2', title: 'Tax deadline approaching', detail: 'Corporate return package due in 2 days.', read: false },
  { id: 'note-3', title: 'Collections campaign updated', detail: 'Segment A outreach cadence changed.', read: true },
];

async function ensureStore() {
  await ensureListSeed('notifications', seed, 'notifications.json');
}

export async function getNotifications(): Promise<NotificationItem[]> {
  await ensureStore();
  return listPgPayloads<NotificationItem>('notifications');
}

export async function saveNotifications(items: NotificationItem[]) {
  await ensureStore();
  await replacePgPayloads('notifications', items);
}
