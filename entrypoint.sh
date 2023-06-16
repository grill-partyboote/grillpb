#!/usr/bin/bash

update_static() {
  echo update static
  backend_address=$backend_address npm --prefix /app/front/ run prod-build
}

run() {
  echo start the app
  cd back
  python3 -m http.server --bind 0.0.0.0 6996
}

case "$1" in
  "static")
    update_static
    ;;
  "bash")
    bash
    ;;
  "run")
    run
    ;;
  *)
    run
    ;;
esac
