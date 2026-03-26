#!/usr/bin/env bash
# Uruchom po: gh auth login
# 1) Tworzy etykietę SEO (jeśli nie istnieje)
# 2) Dodaje etykietę SEO do najnowszego otwartego PR w tym repozytorium

set -euo pipefail
REPO="editsiarra-commits/AK_02_04.01.2026"

if ! gh auth status &>/dev/null; then
  echo "Brak sesji GitHub CLI. Uruchom najpierw: gh auth login"
  exit 1
fi

echo ">>> [1] Etykieta SEO"
if gh label list --repo "$REPO" --limit 500 --json name -q '.[].name' 2>/dev/null | grep -qx 'SEO'; then
  echo "Etykieta SEO już istnieje — pomijam tworzenie."
else
  gh label create "SEO" \
    --description "Optymalizacja pod wyszukiwarki: meta, sitemap, treści" \
    --color "0E8A16" \
    --repo "$REPO"
  echo "Utworzono etykietę SEO."
fi

echo ">>> [2] Przypisanie etykiety do PR"
PR_NUM=$(gh pr list --repo "$REPO" --state open --limit 1 --json number -q '.[0].number' 2>/dev/null || echo "")

if [[ -z "$PR_NUM" || "$PR_NUM" == "null" ]]; then
  echo "Brak otwartego PR w $REPO — etykieta SEO jest gotowa; dodaj ją ręcznie do issue/PR w GitHub."
  exit 0
fi

gh pr edit "$PR_NUM" --add-label "SEO" --repo "$REPO"
echo "Dodano etykietę SEO do PR #$PR_NUM"
