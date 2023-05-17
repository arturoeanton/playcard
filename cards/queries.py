query_card = """
SELECT cd.id, cd.user_owner, cd.title, cd.content, c.name	as category_name, c.id as category_id, cd.created_at, cd.updated_at
FROM Cards as cd INNER JOIN Categories c on c.id = cd.category_id 
WHERE  (upper(cd.content) like upper(%(title_content)s) or upper(cd.title) like upper(%(title_content)s) )-- Filtro de la card por title o contenido
AND (cd.user_owner = '*' or cd.user_owner = %(user)s) -- gatatiza que la card es del usuario o publica
AND (c.user_owner = '*' or c.user_owner = %(user)s) -- gatatiza que la categoria es del usuario o publica
AND c.name = %(category_name)s -- Categoria filtro 
ORDER BY cd.created_at desc
"""