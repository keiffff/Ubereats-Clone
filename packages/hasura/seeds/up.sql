INSERT INTO food_categories
  (name, photo)
VALUES
  ('Breakfast', 'https://storage.googleapis.com/ubereats-clone/food_categories/food_categories_breakfast.png'),
  ('Ramen', 'https://storage.googleapis.com/ubereats-clone/food_categories/food_categories_ramen.png'),
  ('Sandwhiches', 'https://storage.googleapis.com/ubereats-clone/food_categories/food_categories_sandwiches.png'),
  ('Mediterranean', 'https://storage.googleapis.com/ubereats-clone/food_categories/food_categories_mediterranean.png'),
  ('Japanese', 'https://storage.googleapis.com/ubereats-clone/food_categories/food_categories_japanese.png'),
  ('Sushi', 'https://storage.googleapis.com/ubereats-clone/food_categories/food_categories_sushi.png'),
  ('New Mexican', 'https://storage.googleapis.com/ubereats-clone/food_categories/food_categories_new_mexican.png'),
  ('Bar Food', 'https://storage.googleapis.com/ubereats-clone/food_categories/food_categories_bar_food.png'),
  ('Italian', 'https://storage.googleapis.com/ubereats-clone/food_categories/food_categories_italian.png'),
  ('Burgers', 'https://storage.googleapis.com/ubereats-clone/food_categories/food_categories_burgers.png');

INSERT INTO restaurants
  (name, address)
VALUES
  ('Lonesome Dove', '28 Lees Creek Street
Winter Haven, FL 33880'),
  ('Bobby’s', '696 Amherst Court
Lititz, PA 17543'),
  ('Melting Pot', '7786 Newport Lane
Canandaigua, NY 14424'),
  ('Daytime Place', '588 South Pennington Court
Staten Island, NY 10301'),
  ('Easy Eats', '842 SE. Beacon Road
Mount Juliet, TN 37122'),
  ('Macro Bites', '9643 Cooper St.
Plainfield, NJ 07060'),
  ('Grubber Hub', '790 Westport Lane
Twin Falls, ID 83301');

INSERT INTO foods
  (name, photo, category_uuid, description, price, restaurant_uuid)
VALUES
  ('bread with sunny side-up egg', 'https://storage.googleapis.com/ubereats-clone/foods/ben-kolde-FFqNATH27EM-unsplash.jpg', (SELECT uuid
    FROM food_categories
    WHERE name = 'Breakfast'), 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes', 10, (SELECT uuid
    FROM restaurants
    WHERE name = 'Lonesome Dove')),
  ('toast bread with blueberry on black plate', 'https://storage.googleapis.com/ubereats-clone/foods/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg', (SELECT uuid
    FROM food_categories
    WHERE name = 'Breakfast'), 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes', 8, (SELECT uuid
    FROM restaurants
    WHERE name = 'Lonesome Dove')),
  ('noodles with sliced red bell pepper, carrots, and meat', 'https://storage.googleapis.com/ubereats-clone/foods/eriks-irmejs-Prtmg56zIX0-unsplash.jpg', (SELECT uuid
    FROM food_categories
    WHERE name = 'Ramen'), 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes', 11, (SELECT uuid
    FROM restaurants
    WHERE name = 'Melting Pot')),
  ('soup with green leaf on white ceramic bowl', 'https://storage.googleapis.com/ubereats-clone/foods/cody-chan-BLaiOhpirAQ-unsplash.jpg', (SELECT uuid
    FROM food_categories
    WHERE name = 'Ramen'), 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes', 13, (SELECT uuid
    FROM restaurants
    WHERE name = 'Melting Pot')),
  ('sandwhiches with hum', 'https://storage.googleapis.com/ubereats-clone/foods/eaters-collective-uhJfaJ6c9fY-unsplash.jpg', (SELECT uuid
    FROM food_categories
    WHERE name = 'Sandwhiches'), 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes', 7, (SELECT uuid
    FROM restaurants
    WHERE name = 'Bobby’s')),
  ('dumplings on cast iron pan', 'https://storage.googleapis.com/ubereats-clone/foods/louis-hansel-shotsoflouis-2hmDY2HZA8U-unsplash.jpg', (SELECT uuid
    FROM food_categories
    WHERE name = 'Mediterranean'), 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes', 16, (SELECT uuid
    FROM restaurants
    WHERE name = 'Grubber Hub')),
  ('sliced salmon on rice bowl', 'https://storage.googleapis.com/ubereats-clone/foods/haley-truong-UcVxV6BN2z8-unsplash.jpg', (SELECT uuid
    FROM food_categories
    WHERE name = 'Japanese'), 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes', 12, (SELECT uuid
    FROM restaurants
    WHERE name = 'Easy Eats')),
  ('sushi on brown wooden tray', 'https://storage.googleapis.com/ubereats-clone/foods/spencer-chow-PF_zcUW_NYU-unsplash.jpg', (SELECT uuid
    FROM food_categories
    WHERE name = 'Sushi'), 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes', 24, (SELECT uuid
    FROM restaurants
    WHERE name = 'Easy Eats')),
  ('four pieces of meat tacos on tray', 'https://storage.googleapis.com/ubereats-clone/foods/amie-watson-2hBUvhe81mU-unsplash.jpg', (SELECT uuid
    FROM food_categories
    WHERE name = 'New Mexican'), 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes', 14, (SELECT uuid
    FROM restaurants
    WHERE name = 'Bobby’s')),
  ('pasta dish in white plastic container', 'https://storage.googleapis.com/ubereats-clone/foods/sanket-shah-IA0UhqgGgNY-unsplash.jpg', (SELECT uuid
    FROM food_categories
    WHERE name = 'Bar Food'), 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes', 12, (SELECT uuid
    FROM restaurants
    WHERE name = 'Daytime Place')),
  ('pepperoni pizza', 'https://storage.googleapis.com/ubereats-clone/foods/wesual-click-jkC1ul95ujQ-unsplash.jpg', (SELECT uuid
    FROM food_categories
    WHERE name = 'Italian'), 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes', 18, (SELECT uuid
    FROM restaurants
    WHERE name = 'Daytime Place')),
  ('simple burger with fries', 'https://storage.googleapis.com/ubereats-clone/foods/jonathan-borba-8l8Yl2ruUsg-unsplash.jpg', (SELECT uuid
    FROM food_categories
    WHERE name = 'Burgers'), 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes', 16, (SELECT uuid
    FROM restaurants
    WHERE name = 'Bobby’s'));

INSERT INTO food_details
  (photo, food_uuid)
SELECT photo, uuid
FROM foods;

INSERT INTO users
  (id, email, first_name, last_name)
VALUES
  ('sample-user-id', 'user1@example.com', 'Sample', 'User'),
  ('sample-user2-id', 'user2@example.com', 'Sample', 'User2'),
  ('sample-user3-id', 'user3@example.com', 'Sample', 'User3');

INSERT INTO orders
  (user_id)
VALUES
  ('sample-user-id'),
  ('sample-user2-id'),
  ('sample-user3-id');

INSERT INTO order_foods
  (food_uuid, order_uuid, count)
VALUES
  ((SELECT uuid
    FROM foods
    WHERE name = 'bread with sunny side-up egg'), (SELECT uuid
    FROM orders
    WHERE user_id = 'sample-user-id'), 1),
  ((SELECT uuid
    FROM foods
    WHERE name = 'sliced salmon on rice bowl'), (SELECT uuid
    FROM orders
    WHERE user_id = 'sample-user-id'), 1),
  ((SELECT uuid
    FROM foods
    WHERE name = 'sandwhiches with hum'), (SELECT uuid
    FROM orders
    WHERE user_id = 'sample-user-id'), 2),
  ((SELECT uuid
    FROM foods
    WHERE name = 'toast bread with blueberry on black plate'), (SELECT uuid
    FROM orders
    WHERE user_id = 'sample-user2-id'), 2),
  ((SELECT uuid
    FROM foods
    WHERE name = 'noodles with sliced red bell pepper, carrots, and meat'), (SELECT uuid
    FROM orders
    WHERE user_id = 'sample-user3-id'), 1),
  ((SELECT uuid
    FROM foods
    WHERE name = 'sushi on brown wooden tray'), (SELECT uuid
    FROM orders
    WHERE user_id = 'sample-user3-id'), 1),
  ((SELECT uuid
    FROM foods
    WHERE name = 'pepperoni pizza'), (SELECT uuid
    FROM orders
    WHERE user_id = 'sample-user3-id'), 4),
  ((SELECT uuid
    FROM foods
    WHERE name = 'dumplings on cast iron pan'), (SELECT uuid
    FROM orders
    WHERE user_id = 'sample-user-id'), 1),
  ((SELECT uuid
    FROM foods
    WHERE name = 'simple burger with fries'), (SELECT uuid
    FROM orders
    WHERE user_id = 'sample-user-id'), 2);
