## 2024-10-27 - O(N^2) tag deduplication
**Learning:** `getUniqueTags` previously used `.filter` and `findIndex` leading to an O(N^2) lookup.
**Action:** Replace `O(N^2)` filter with an `O(N)` `Map` approach in the future.
