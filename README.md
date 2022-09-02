# Primer dia con Git/Github 

Lista de comandos de Git 

* Poder ver la version de Git
```bash
git --version
```

* Comando para configurar el correo 
```bash
git config --global user.email "user@gmail.com"
```
* Para poder configurar el username 
```bash
git config --global user.name "username"
```
* Agregar archivos a la memoria de la PC 
```bash
git add . 
```
* Crear el registro de los cambios realizados 
```bash 
git commit -m "comentario" 
```
* Poder ver el historial de commits 

[x] Git log retorna una `id`con este id podemos indetificarlo 
```bash
git log 
```
* Poder ver detalles del commit 
```bash
git show "id-de-commtit"
```