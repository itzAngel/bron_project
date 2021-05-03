<?php

    include("conexion.php");
   
    
    if(isset($_POST['codigo']) || isset($_POST['modelo']) ||isset($_POST['talla']) ||isset($_POST['color']) ||isset($_POST['genero']) ||isset($_POST['categoria']) ||isset($_POST['precio']) ||isset($_POST['cantidad']) || isset($_POST['imagen'])  ){
           $CODIGOPRODUCTO = $_POST["codigo"];
            $MODELO = $_POST["modelo"];
            $TALLA= $_POST["talla"];
            $COLOR= $_POST["color"];
            $GENERO= $_POST["genero"];
            $CATEGORIA= $_POST["categoria"];
            $PRECIO= $_POST["precio"];
            $CANTIDAD= $_POST["cantidad"];
            $imagen = addslashes(file_get_contents($_FILES['imagen']['tmp_name']));

    }
       
    $query = "INSERT INTO Productos(CODIGOPRODUCTO,MODELO,TALLA,COLOR,GENERO,CODIGO_CATEGORIA,PRECIO,CANTIDAD,Imagen) VALUES ('$CODIGOPRODUCTO','$MODELO','$TALLA','$COLOR','$GENERO','$CATEGORIA','$PRECIO','$CANTIDAD','$imagen')";

     $resultado = $con->query($query);

            if($resultado){
                echo "si se inserto";
            }else{
                echo "no se inserto";
            }
   
?>