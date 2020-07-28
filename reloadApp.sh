pm2 stop colegiojmlondres.edu.mx:3008
pm2 delete colegiojmlondres.edu.mx:3008
PROD=true pm2 start ./bin/www --name colegiojmlondres.edu.mx:3008
pm2 logs colegiojmlondres.edu.mx:3008
