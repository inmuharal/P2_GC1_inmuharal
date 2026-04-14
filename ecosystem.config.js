module.exports = {
  apps : [{
    name   : "63-server",
    script : "bin/www",
        env : {
                NODE_ENV:"production",
                PORT : 80,
                DATABASE_URL :"postgresql://postgres.cgoynyisujxotdknqxsz:ej1KfSPRkdMKxHn5@aws-1-ap-south-1.pooler.supabase.com:6543/postgres",
                SECRET_KEY:'OKEGAS',
                CLOUDINARY_CLOUD_NAME : "dmv5ni7ud",
                CLOUDINARY_API_KEY : "988751142166531",
                CLOUDINARY_API_SECRET : "NCUwfFGdjqcdTNXE6wyGwrAFMas"
        }
  }]
}
