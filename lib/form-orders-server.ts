import { readdir } from "node:fs/promises";
import path from "node:path";
import { formOrderCatalog, type FormOrderGroup } from "@/lib/form-orders";

const SAMPLE_DIR = path.join(process.cwd(), "public", "forms", "samples");
const SAMPLE_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);

async function loadSampleImageMap(): Promise<Map<string, string>> {
  const map = new Map<string, string>();
  try {
    const files = await readdir(SAMPLE_DIR);
    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      if (!SAMPLE_EXTS.has(ext)) continue;
      const code = path.basename(file, ext);
      if (!code || map.has(code)) continue;
      map.set(code, `/forms/samples/${file}`);
    }
  } catch {
    // 폴더가 없거나 읽을 수 없으면 샘플 없음으로 처리
  }
  return map;
}

export async function getFormOrderGroups(): Promise<FormOrderGroup[]> {
  const samples = await loadSampleImageMap();
  return formOrderCatalog.map((group) => ({
    name: group.name,
    items: group.items.map((item) => ({
      ...item,
      sampleImage: samples.get(item.code) ?? null,
    })),
  }));
}
