CREATE TABLE houses (
    id SERIAL PRIMARY KEY,
    property_name VARCHAR(30),
    street_address VARCHAR(100),
    city VARCHAR(100),
    state_location VARCHAR(2),
    zipcode INTEGER,
    img TEXT,
    mortgage DECIMAL,
    rent DECIMAL
);