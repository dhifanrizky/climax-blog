$.getJSON('data.json', function(data) {
    let blog = data.blog;
    console.log(blog);
    $.each(blog, function(i, data) {
        $('#daftar-blog').append('<article class="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg"><img alt=""src="'+ data.gambar +'"class="h-56 w-full object-cover"/><div class="bg-white p-4 sm:p-6"><a href="#"><h3 class="mt-0.5 text-lg text-gray-900">'+ data.judul +'</h3></a><p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">'+data.konten+'</p></div></article>')
    })
})