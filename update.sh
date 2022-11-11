#! /bin/bash


while true ; do npm run build && cp -r ./dist/* ./public/  ; sleep 4  ; done

