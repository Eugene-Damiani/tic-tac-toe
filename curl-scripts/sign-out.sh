
curl "https://tic-tac-toe-api-production.herokuapp.com/sign-out" \
--include \
--request DELETE \
--header "Authorization: Bearer ${TOKEN}" \
--header "Content-Type: application/json"


echo
