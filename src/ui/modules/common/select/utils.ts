import { FilterArtworkTypes } from "@/ui/lib/context/chicago-institute-context/types";

export const artworkTypesToStringArrayTransformer = (
  selectedArtworkTypes: FilterArtworkTypes
) =>
  Object.entries(selectedArtworkTypes)
    .map(([name, value]) => {
      if (value) {
        return name;
      }
    })
    .filter((element) => element !== undefined);
