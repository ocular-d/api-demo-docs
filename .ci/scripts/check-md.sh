#!/bin/bash
# Find all .md files but ignore the .github directory
find . -path './.github' -prune -o -type f -iname '*.md' -print
