CREATE DATABASE IF NOT EXISTS trouve_ton_artisan;
USE trouve_ton_artisan;

CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE specialites (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category_id INT NOT NULL,
    CONSTRAINT fk_specialites_category
       FOREIGN KEY (category_id)
       REFERENCES categories(id)
       ON DELETE CASCADE
       ON UPDATE CASCADE
);

CREATE TABLE artisans (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    note DECIMAL(2,1) NOT NULL,
    city VARCHAR(100) NOT NULL,
    about TEXT NOT NULL,
    email VARCHAR(150) NOT NULL,
    website VARCHAR(255) NULL,
    specialite_id INT NOT NULL,
    top_artisan BOOLEAN NOT NULL DEFAULT FALSE,
    CONSTRAINT fk_artisans_specialite
        FOREIGN KEY (specialite_id)
        REFERENCES specialites(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE

);

INSERT INTO categories (name) VALUES
('Alimentation'),
('Batiment'),
('Fabrication'),
('Services');

INSERT INTO specialites (name, category_id) VALUES
('Boucher', 1),
('Boulanger', 1),
('Chocolatier', 1),
('Traiteur', 1),
('Chauffagiste', 2),
('Electricien', 2),
('Menuisier', 2),
('Plombier', 2),
('Bijoutier', 3),
('Couturier', 3),
('Ferronier', 3),
('Coiffeur', 4),
('Fleuriste', 4),
('Toiletteur', 4),
('Webdesign', 4);

INSERT INTO artisans (name, note, city, about, email, website, specialite_id, top_artisan) VALUES
(
    'Boucherie Dumont',
    4.5,
    'Lyon',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    'boucherie.dumond@gmail.com',
    NULL,
    1,
    FALSE
),
(
    'Au pain chaud',
    4.8,
    'Montélimar',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    'aupainchaud@hotmail.com',
    NULL,
    2,
    TRUE
),
(
    'Chocolaterie Labbé',
    4.9,
    'Lyon',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    'chocolaterie-labbe@gmail.com',
    'https://chocolaterie-labbe.fr',
    3,
    TRUE
),
(
    'Traiteur Truchon',
    4.1,
    'Lyon',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    'contact@truchon-traiteur.fr',
    'https://truchon-traiteur.fr',
    4,
    FALSE
),
(
    'Orville Salmons',
    5.0,
    'Evian',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    'o-salmons@live.com',
    NULL,
    5,
    TRUE
),
(
    'Mont Blanc Eléctricité',
    4.5,
    'Chamonix',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    'contact@mont-blanc-electricite.com',
    'https://mont-blanc-electricite.com',
    6,
    FALSE
),
(
    'Boutot & fils',
    4.7,
    'Bourg-en-bresse',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    'boutot-menuiserie@gmail.com',
    'https://boutot-menuiserie.com',
    7,
    FALSE
),
(
    'Vallis Bellemare',
    4.0,
    'Vienne',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    'v.bellemare@gmail.com',
    'https://plomberie-bellemare.com',
    8,
    FALSE
),
(
    'Claude Quinn',
    4.2,
    'Aix-les-bains',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    'claude.quinn@gmail.com',
    NULL,
    9,
    FALSE
),
(
    'Amitee Lécuyer',
    4.5,
    'Annecy',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    'a.amitee@hotmail.com',
    'https://lecuyer-couture.com',
    10,
    FALSE
),
(
    'Ernest Carignan',
    5.0,
    'Le Puy-en-Velay',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    'e-carigan@hotmail.com',
    NULL,
    11,
    FALSE
),
(
    'Royden Charbonneau',
    3.8,
    'Saint-Priest',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    'r.charbonneau@gmail.com',
    NULL,
    12,
    FALSE
),
(
    'Leala Dennis',
    3.8,
    'Chambéry',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    'l.dennos@hotmail.fr',
    'https://coiffure-leala-chambery.fr',
    12,
    FALSE
),
(
    'C''est sup''hair',
    4.1,
    'Romans-sur-Isère',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    'sup-hair@gmail.com',
    'https://sup-hair.fr',
    12,
    FALSE
),
(
    'Le monde des fleurs',
    4.6,
    'Annonay',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    'contact@le-monde-des-fleurs-annonay.fr',
    'https://le-monde-des-fleurs-annonay.fr',
    13,
    FALSE
),
(
    'Valérie Laderoute',
    4.5,
    'Valence',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    'v-laredoute@gmail.com',
    NULL,
    14,
    FALSE
),
(
    'CM Graphisme',
    4.4,
    'Valence',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    'contact@cm-graphisme.com',
    'https://cm-graphisme.com',
    15,
    FALSE
);

