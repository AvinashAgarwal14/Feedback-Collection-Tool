function localtunnel {
  lt --port 5000 --subdomain <RANDOM_SUB_DOMAIN>
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done