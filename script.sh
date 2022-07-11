
echo $1
### 
if [ $1 = "generate" ]
then
    echo "******* Generating Zip file .........."
    npm run-script build --prod
    rm -rf dist.zip
    zip -r dist.zip dist/
    echo "....... Done *********"
else 
    echo "******* Unzip file............"
    rm -rf dist
    # unzip project
    unzip dist.zip
    echo "....... Done *********"
fi


