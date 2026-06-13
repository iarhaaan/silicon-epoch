import { describe, it, expect } from "vitest";
import { SOURCES_DATA, SOURCES_MAP } from "./sources-data";

describe("Sources Bibliography Data Layer", () => {
  it("should verify that SOURCES_DATA contains entries", () => {
    expect(SOURCES_DATA.length).toBeGreaterThan(0);
  });

  it("should verify that SOURCES_MAP matches the SOURCES_DATA array size", () => {
    expect(SOURCES_MAP.size).toBe(SOURCES_DATA.length);
  });

  it("should perform correct O(1) lookups on SOURCES_MAP", () => {
    // Check some well-known entries
    const tsmc = SOURCES_MAP.get("tsmc-2nm-production");
    expect(tsmc).toBeDefined();
    expect(tsmc?.author).toBe("TSMC Official Press Release");
    expect(tsmc?.type).toBe("primary");

    const transformer = SOURCES_MAP.get("transformer-paper-2017");
    expect(transformer).toBeDefined();
    expect(transformer?.author).toContain("Jakob Uszkoreit");
    expect(transformer?.type).toBe("primary");
  });

  it("should match source indices between array and map", () => {
    SOURCES_DATA.forEach((source, index) => {
      const mapped = SOURCES_MAP.get(source.id);
      expect(mapped).toBeDefined();
      expect(mapped?.index).toBe(index);
    });
  });

  it("should return undefined for non-existent source IDs", () => {
    const missing = SOURCES_MAP.get("non-existent-source-id");
    expect(missing).toBeUndefined();
  });
});
