function localtunnel {
  lt -s <RANDOM_SUB_DOMAIN> --port 5000
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done