#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DIST_DIR="$ROOT_DIR/dist"

if [ ! -d "$DIST_DIR" ]; then
  echo "Build output not found at $DIST_DIR. Run 'npm run build' first." >&2
  exit 1
fi

cd "$ROOT_DIR"

echo "Clearing previous deployed assets..."
rm -rf _astro libs images citations index.html

echo "Copying fresh build artifacts from dist/..."
cp "$DIST_DIR/index.html" "$ROOT_DIR/index.html"
cp -R "$DIST_DIR/_astro" "$ROOT_DIR/"
cp -R "$DIST_DIR/libs" "$ROOT_DIR/"
cp -R "$DIST_DIR/images" "$ROOT_DIR/"
cp -R "$DIST_DIR/citations" "$ROOT_DIR/"

echo "Ensuring .nojekyll exists for GitHub Pages..."
touch "$ROOT_DIR/.nojekyll"

echo "Done. Commit and push the updated root files to publish."
