CATEGORIES

- id (PK)
- name

SPECIALITES

- id (PK)
- name
- category_id (FK -> categories.id)

ARTISANS

- id (PK)
- name
- note
- city
- about
- email
- website
- image
- specialite_id (FK -> specialites.id)
