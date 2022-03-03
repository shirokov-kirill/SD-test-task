docker stop sd_test_frontend SD_test_backend SD_test_mongo
docker rm sd_test_frontend SD_test_backend SD_test_mongo
docker system prune -f -a
docker-compose up -d
