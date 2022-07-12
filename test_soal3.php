<?php
function starTriangle($a)
{
    for ($i = 1; $i <= $a; $i++) {
        for ($j = 0; $j < $i; $j++) {
            echo "*";
        }
        echo "\n";
    }

    for ($i = 0; $i <= $a - 1; $i++) {
        for ($j = $a; $j > $i; $j--) {
            echo " ";
        }
        for ($k = 1; $k <= $i; $k++) {
            echo "*";
        }
        echo "\n";
    }
}


starTriangle(6);
