#!/bin/bash

BUNDLE=$(which bundle)
RBENV=$(which rbenv)

if [[ -z "$BUNDLE" ]]; then
    echo "Please install bundler"
    exit 1
fi

JEKYLL="./.bundle/packages/ruby/2.5.0/bin/jekyll"
if [[ ! -x "$JEKYLL" ]]; then
    ${BUNDLE} install --path .bundle/packages
fi

COMMAND="bundle exec jekyll serve --livereload --baseurl ''"
if [[ -n "$RBENV" ]]; then
    COMMAND="$RBENV exec $COMMAND"
fi

${COMMAND}
