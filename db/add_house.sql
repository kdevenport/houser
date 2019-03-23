INSERT INTO houses (property_name, street_address, city, state_location, zipcode)
VALUES (${name}, ${address}, ${city}, ${state}, ${zipcode})
RETURNING *;
