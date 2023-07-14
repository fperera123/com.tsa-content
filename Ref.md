curl -H "Accept: application/vnd.github.everest-preview+json" \
    -H "Authorization: token ?" \
    --request POST \
    --data '{"event_type": "strapi_updates"}' \
    https://api.github.com/repos/fperera123/com.tsa-content/dispatches