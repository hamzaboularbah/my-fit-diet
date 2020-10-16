let cacheData = "my-diet-fit";
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(cacheData)
      .then((cache) => {
        cache.addAll([
          "/",
          "/index.html",
          "/static/js/main.chunk.js",
          "/static/js/1.chunk.js",
          "/static/js/bundle.js",
          "/static/css/main.chunk.css",
        ]);
      })
      .catch((err) => console.error(err))
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
      caches
        .match(event.request)
        .then((response) => {
          if (response) return response;
          else let requestUrl = event.request.clone();
          fetch(requestUrl);
        })
        .catch((err) => console.error(err))
    );
  }
});
