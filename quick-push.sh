#!/bin/bash

# Script per push rapidi su GitHub
# Uso: ./quick-push.sh "messaggio commit" oppure ./quick-push.sh (usa messaggio default)

# Colori per output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Messaggio di commit (usa parametro o default)
if [ -z "$1" ]; then
    COMMIT_MSG="Update: $(date '+%Y-%m-%d %H:%M')"
else
    COMMIT_MSG="$1"
fi

echo -e "${BLUE}🚀 Quick GitHub Push${NC}"
echo -e "${BLUE}Commit message:${NC} $COMMIT_MSG"
echo ""

# Controlla se ci sono modifiche
if git diff --quiet && git diff --staged --quiet; then
    echo -e "${RED}❌ Nessuna modifica da committare${NC}"
    exit 1
fi

# Esegue i comandi Git
echo -e "${BLUE}📦 Adding files...${NC}"
git add .

echo -e "${BLUE}💾 Committing...${NC}"
git commit -m "$COMMIT_MSG"

echo -e "${BLUE}☁️  Pushing to GitHub...${NC}"
git push

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Push completato con successo!${NC}"
    echo -e "${GREEN}🔗 Repository: $(git remote get-url origin)${NC}"
else
    echo -e "${RED}❌ Errore durante il push${NC}"
    exit 1
fi
