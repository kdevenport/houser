INSERT INTO houses (property_name, street_address, city, state_location, zipcode, img, mortgage, rent)
VALUES (${name}, ${address}, ${city}, ${state}, ${zipcode}, ${img}, ${mortgage}, ${rent})
RETURNING *;
