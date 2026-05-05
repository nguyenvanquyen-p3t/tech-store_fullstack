using Microsoft.EntityFrameworkCore;
using MyBackendAPI.Models;

namespace MyBackendAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configure decimal precision for Price
            modelBuilder.Entity<Product>()
                .Property(p => p.Price)
                .HasColumnType("decimal(18,2)");

            // Seed initial data matching the frontend mock data
            modelBuilder.Entity<Product>().HasData(
                new Product { Id = 1, Name = "iPhone 15 Pro Max", Price = 34990000, Category = "phone", ImageUrl = "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_3.png" },
                new Product { Id = 2, Name = "Samsung Galaxy S24 Ultra", Price = 31990000, Category = "phone", ImageUrl = "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-s24-ultra.png" },
                new Product { Id = 3, Name = "MacBook Pro M3 14\"", Price = 49990000, Category = "laptop", ImageUrl = "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/m/a/macbook-pro-14-inch-m3-1_2.png" },
                new Product { Id = 4, Name = "Laptop Gaming ASUS ROG", Price = 42990000, Category = "laptop", ImageUrl = "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_ng_n_14__5_7.png" },
                new Product { Id = 5, Name = "AirPods Pro 2", Price = 5990000, Category = "accessory", ImageUrl = "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_169_2.png" },
                new Product { Id = 6, Name = "Tai nghe Sony WH-1000XM5", Price = 7490000, Category = "accessory", ImageUrl = "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/s/o/sony_wh-1000xm5_1.png" },
                new Product { Id = 7, Name = "Xiaomi 14 Ultra", Price = 23990000, Category = "phone", ImageUrl = "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/x/i/xiaomi-14-ultra.png" },
                new Product { Id = 8, Name = "Dell XPS 15", Price = 45990000, Category = "laptop", ImageUrl = "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_ng_n_7__7_16.png" },
                new Product { Id = 9, Name = "OPPO Find X7 Ultra", Price = 22990000, Category = "phone", ImageUrl = "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/o/p/oppo-find-x7-ultra_1__1.png" },
                new Product { Id = 10, Name = "HP Spectre x360", Price = 38990000, Category = "laptop", ImageUrl = "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/h/p/hp-spectre-x360.png" },
                new Product { Id = 11, Name = "Bàn phím cơ Keychron K8", Price = 2490000, Category = "accessory", ImageUrl = "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/k/e/keychron-k8.png" },
                new Product { Id = 12, Name = "Chuột Logitech MX Master 3S", Price = 2190000, Category = "accessory", ImageUrl = "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/m/x/mx-master-3s_2.png" }
            );
        }
    }
}
