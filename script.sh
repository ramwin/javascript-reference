ls -1 | grep 2015 | while read fn; do
    echo "$fn"
    mv $fn $fn[2:]
done
