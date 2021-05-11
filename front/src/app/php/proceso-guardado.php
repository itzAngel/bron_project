<?php

    include("conexion.php");
    
    if(isset($_POST['subir-imagen']) || isset($_POST['codigoDetalle']) ){
        $codigo = $_POST["codigoDetalle"];
        $imagen = addslashes(file_get_contents($_FILES['subir-imagen']['tmp_name']));
    }
       
    $query = "UPDATE Detalle_Productos SET imagen='$imagen' WHERE codigoProducto='$codigo'";

     $resultado = $con->query($query);

            if($resultado){
                echo "si se inserto";
            }else{
                echo "no se inserto";
            }
   
?>