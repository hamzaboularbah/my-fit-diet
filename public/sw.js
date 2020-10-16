const cacheData = "my-diet-fit";
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        "/static/js/main.chunk.js",
        "/static/js/1.chunk.js",
        "/static/js/bundle.js",
        "/static/css/main.chunk.css",
        "/index.html",
      ]);
    })
  );
});

this.addEventListener("fetch", (event) => {
  // console.warn("url",event.request.url)

  if (!navigator.onLine) {
    // if (event.request.url === "http://localhost:3000/static/js/main.chunk.js") {
    //   event.waitUntil(
    //     this.registration.showNotification("Internet", {
    //       body: "internet not working",
    //     })
    //   );
    // }
    event.respondWith(
      caches.match(event.request).then((resp) => {
        if (resp) {
          return resp;
        }
        let requestUrl = event.request.clone();
        fetch(requestUrl);
      })
    );
  }
});
