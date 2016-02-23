#!/bin/bash

read -p" Nombre del archivo: " archivote;

cp -vr "..test1/$archivote" "$HOME";
ls "$HOME";
