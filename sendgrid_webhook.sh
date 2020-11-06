function localtunnel {
  # lt --port 5000 --subdomain asdasfdafad -h "https://serverless.social"
  lt --port 5000 --subdomain asdasfdafad
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done