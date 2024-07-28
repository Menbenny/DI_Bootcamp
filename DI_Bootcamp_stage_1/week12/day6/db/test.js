const knex = require('knex')

//# Do not expose your Neon credentials to the browser

const PGHOST='ep-silent-cherry-a5ik57jg.us-east-2.aws.neon.tech'
const PGDATABASE='neondb'
const PGUSER='neondb_owner'
const PGPASSWORD='U7AVHfsv3GBJ'
const PGPORT= 5432 

// in knex - object with all connection strings 
const db = knex({
    client: 'pg',
    connection: {
        host: PGHOST,
        port: PGPORT,
        user: PGUSER,
        database: PGDATABASE,
        password: PGPASSWORD,
        // For global/online - not local databse
        ssl: { rejectUnaithorized: false },
    },
});

// async function getVersion(){
//     try {
//         const result = await db.raw('select version()');
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// } 

// getVersion()

// Getting data from the database
// db.raw('select * from products')
// .then((data)=> console.log(data.rows))
// .catch((err)=> console.log(err))

//Promise based Query builder 
// db('products')

//     // chaining queries doesn't have to be in  any specific order
//     // Best practice - start with select  
// .select('id', 'name', 'price')
//      // filter with where
// //      // ? Where takes either an object
// //      // ?     OR
// //      // ?   .where(id, 2)
// // .where({id : 2})     
// .then(data => {
//     console.log(data);
// })
// .catch((e) => {
//     console.log(e);
// })

// INSERT - 
// db('products')
// .insert([
//     {name: 'newproduct 1', price: 600},
//     {name: 'next new product', price: 199}

// ], 
// // RETURNING DATA - 2nd method
// ["id", "name"]
// )

// // ! importance of returning - i.e new user registered (to get user id in order to chain it in updating the users information)

// // RETURNING DATA - 1st method
// // .returning(['id', 'name', 'price'])
// .then(data => {
//     console.log(data);
// })
// .catch((e) => {
//     console.log(e);
// })


//update
// db('products')                                      // returning 
//     .update({name: 'updated product', price: 2599}, ["name", "price"])
            
//     .where({id: 2})

//     .then((data)=> {
//         console.log(data);
//     })
//     .catch((e)=>{
//         console.log(e);
//     })

//Delete
db('products')                                     
    .del() 
    .where({id: 2})
    .returning(["name", "price"])
    
    .then((data)=> {
        console.log(data);
    })
    .catch((e)=>{
        console.log(e);
    })

