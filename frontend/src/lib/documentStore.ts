import { ensureListSeed, listPgPayloads, replacePgPayloads } from '@/lib/postgres';

export type DocumentRecord = {
  id: string;
  name: string;
  type: string;
  owner: string;
  status: string;
  updatedAt: string;
  fileName?: string;
  storagePath?: string;
  sizeBytes?: number;
};

const seed: DocumentRecord[] = [
  { id: 'doc-1', name: 'Q2 Board Package', type: 'Board Report', owner: 'Controller', status: 'In review', updatedAt: '2026-05-24 10:00' },
  { id: 'doc-2', name: 'Corporate Return 2025', type: 'Tax Return', owner: 'Tax Manager', status: 'Assembling', updatedAt: '2026-05-24 11:20' },
  { id: 'doc-3', name: 'Expense Audit Binder', type: 'Audit Binder', owner: 'Internal Audit', status: 'Ready', updatedAt: '2026-05-24 09:35' },
];

async function ensureStore() {
  await ensureListSeed('documents', seed, 'documents.json');
}

export async function getDocuments(): Promise<DocumentRecord[]> {
  await ensureStore();
  return listPgPayloads<DocumentRecord>('documents');
}

export async function saveDocuments(items: DocumentRecord[]) {
  await ensureStore();
  await replacePgPayloads('documents', items);
}
