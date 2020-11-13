#!/bin/bash
curl -d "@data.json" -H "Content-Type: application/json" -X POST localhost:3000/people
echo