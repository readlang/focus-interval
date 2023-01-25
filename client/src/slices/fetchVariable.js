// variable to set API fetch path

// 
let path = "https://focus-interval.netlify.app/api"

if ( process.env.NODE_ENV === "development" ) {
    // use this for local development
    path = ""
}



// use this for vercel deployed production
// export const path = "https://focus-interval.fly.dev"

// use this for Netlify deployed production
// export const path = "https://focus-interval.netlify.app/api"
// this path would have to change if absolute path changes

export { path }