# FriendCMS
Content Management Systems (CMS)
 curl -d '{"name":"value1", "password":"value2"}' -H "Content-Type: application/json" -X POST http://localhost:3012/login?v=y7ksXLhuy-w

 curl -d '{"name":"user", "password":"password", "email":"user@ukr.net"}' -H "Content-Type: application/json" -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhMSI6IkRhdGEgMSIsImRhdGEyIjoiRGF0YSAyIiwiZGF0YTMiOiJEYXRhIDMiLCJkYXRhNCI6IkRhdGEgNCIsImlhdCI6MTYwNzI4NDk1NSwiZXhwIjoxNjA3MzI4MTU1LCJhdWQiOiJodHRwOi8vbXlzb2Z0Y29ycC5pbiIsImlzcyI6Ik15c29mdCBjb3JwIiwic3ViIjoic29tZUB1c2VyLmNvbSJ9.Kgu413pbkcXWUrNci1xwe2-PJSus2f0pQ93OId682AQf7IoTD1Yw-ClHms0Gui-CX8YyR6eBWwlkwnDW0YVzRg" -X POST http://localhost:3012/login

curl -i -X GET http://localhost:3012/profile?name=test&email=aaa@gmail.com

curl -i -X POST http://localhost:3012/login?v=y7ksXLhuy-w

curl -H "Content-Type: application/json" -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhMSI6IkRhdGEgMSIsImRhdGEyIjoiRGF0YSAyIiwiZGF0YTMiOiJEYXRhIDMiLCJkYXRhNCI6IkRhdGEgNCIsImlhdCI6MTYwNzI4NDk1NSwiZXhwIjoxNjA3MzI4MTU1LCJhdWQiOiJodHRwOi8vbXlzb2Z0Y29ycC5pbiIsImlzcyI6Ik15c29mdCBjb3JwIiwic3ViIjoic29tZUB1c2VyLmNvbSJ9.Kgu413pbkcXWUrNci1xwe2-PJSus2f0pQ93OId682AQf7IoTD1Yw-ClHms0Gui-CX8YyR6eBWwlkwnDW0YVzRg" -X POST -v http://localhost:3012/login



curl 'http://localhost:3012/profile?name=test&email=aaa@gmail.com' \
  -H 'authority: developer.mozilla.org' \
  -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Safari/537.36' \
  -H 'accept: */*' \
  -H 'sec-fetch-site: same-origin' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-dest: empty' \
  -H 'referer: https://developer.mozilla.org/en-US/docs/Web/API/Request/headers' \
  -H 'accept-language: en-US,en;q=0.9,uk;q=0.8,ru;q=0.7' \
  -H 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhMSI6IkRhdGEgMSIsImRhdGEyIjoiRGF0YSAyIiwiZGF0YTMiOiJEYXRhIDMiLCJkYXRhNCI6IkRhdGEgNCIsImlhdCI6MTYwNzYxNjc0MywiZXhwIjoxNjA3NjU5OTQzfQ.YVQwyHpXD-j6H_yInZ1FNkq-bt23JaRkGX_q_9QR3q50cPkc7k1DAc2rJm_xCf-4Ke4XYfgGWtkoblde9RcXxQ' \
  -H 'cookie: _ga=GA1.2.1955473400.1584536269; dwf_sg_task_completion=False; _gid=GA1.2.614355813.1607594606; lux_uid=160761439080046585; _gat=1' \
  --compressed
