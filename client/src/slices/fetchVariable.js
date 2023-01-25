// variable to set API fetch path

// use this for Netlify deployed production
// this path would have to change if absolute path changes
let path = "https://focus-interval.netlify.app/api"

if ( process.env.NODE_ENV === "development" ) {
    // use this for local development
    path = ""
}


// use this for vercel deployed production
// this doesn't work when cross-site tracking is disabled...
// export const path = "https://focus-interval.fly.dev"


export { path }