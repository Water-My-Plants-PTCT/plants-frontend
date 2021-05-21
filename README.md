# plants-frontend

What features are required for your minimum viable product?

Signup Form - username, phone number and password

Login Form - username and password

Landing Page - user can Create, Update, and Delete a plant

    Created plant form must have these values, as well as the edit function.
    *Each plant must have
    - `id`: Integer
    - `nickname`: String
    - `species` : String
    - `h2oFrequency`: Type determined by implementation
    - `image`: (optional)

Need buttons to be able to update, and delete the plant

A display page that has all the plants the user has created, maybe a way to see what other users have created as well.

Authenticated `user` can update their `phoneNumber` and `password`.

Logout button on landing page to remove token and route user back to home page.

If there’s time: Allow user to upload a custom image for plant

UNIT 3 CHECKLIST

Login authentication with token
Registration authentication with token
Edit, Delete API have been built out through the dummy API
Built out axiosWithAuth
Built out a PrivateRoute page.
Built out the store.

OBVIOUSLY WILL NEED TO TEST WITH ACTUAL FORMS

NEED TO DO:
Reducers/Actions
ROUTING

API ENDPOINTS
baseUrl: https://water-my-plants-ptct.herokuapp.com
Auth Endpoints | Required Fields | Description
POST REQUESTS

<!-- /api/auth/login       | username, password                              | login user and set token [test user]: username= test, password= test
/api/auth/register    | username, phone, password                       | registers user and save credentials to server, username/phone must be unique (non-duplicates)
                                                                          username min 3 characters long && phone minimum 10 characters long (integer)
/api/auth/logout      | user must be logged in                          | Allows user to logout and remove token and session id -->

PUT REQUESTS:
/api/auth/users/:id | phone OR password | User can update their phone number or password. Phone number must be unique (non-duplicates)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Plant Endpoints | Required Fields / Token | Description
GET REQUESTS:

<!-- /api/plants           | Token Required                                  | Get's a list of all plants in database -->

/api/plants/:id | Token Required | Get's a specific plant based on the plant_id
/api/plants/user/:id | Token Required | Gets a list of plant data from a specific user id

<!-- POST REQUESTS:
/api/plants           | Token Required, Required Fields:                | Creates a new plant and returns an object. Optional: User can insert an image url to be saved to
                        nickname, species, h2oFrequency,                  database. Ex: https://thumbs.dreamstime.com/z/cambria-orchid-plant-blooming-white-38131910.jpg
                        user_id, photo(optional, user can
                        insert an image url) -->

PUT REQUESTS:

<!-- /api/plants/:id       | Token Required, Required Fields:                | Allows user to update information about a specific plant based on the plant_id
                        user can update any of the plant fields
                        (nickname, species, h20frequency, etc)
DELETE_REQUESTS:
/api/plants/:id       | Token Required                                  | Allows user to delete a specific plant based on the plant_id -->
