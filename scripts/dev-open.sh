#!/usr/bin/env bash
# Starts the Astro dev server and asks the editor to open it in a browser.
#
# Astro's own --open flag hardcodes `xdg-open` on Linux, which cannot work on a
# headless remote host: there is no display here. VS Code exports $BROWSER
# pointing at a helper that opens the URL on the client side instead, so we poll
# until the server answers and then hand the URL to $BROWSER.
#
# Astro itself keeps the terminal, so colors, request logs and Ctrl+C behave
# exactly as they would without this wrapper.
set -uo pipefail

PORT="${PORT:-4321}"
URL="http://localhost:${PORT}/"

(
  for _ in $(seq 1 60); do
    if curl -s -o /dev/null --max-time 1 "$URL"; then
      "${BROWSER:-xdg-open}" "$URL" >/dev/null 2>&1
      exit 0
    fi
    sleep 0.5
  done
  echo "dev-open: server did not answer on ${URL}; open it manually." >&2
) &

exec npx astro dev --port "$PORT" "$@"
