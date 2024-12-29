package com.example.ecommerce.dataloader;

import com.example.ecommerce.domain.Product;
import com.example.ecommerce.domain.ProductCategory;
import com.example.ecommerce.repository.ProductRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Slf4j
@Component
public class ProductsLoader implements CommandLineRunner {
    private ProductRepository productRepository;

    public ProductsLoader(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }
    @Override
    public void run(String... args) throws Exception {
        log.info("Loading products...");
        loadProducts();
        log.info("Products loaded successfully");
    }

    private void loadProducts(){
        Product[] products;
        products = new Product[]{
                new Product("LG OLED evo C4 4K TV", "LG", 240989.00, 10, ProductCategory.ELECTRONICS, Arrays.asList("https://www.lg.com/content/dam/channel/wcms/in/images/tvs/oled42c44la_atr_eail_in_c/gallery/oled-c4-42-a-gallery-01.jpg")),
                new Product("LG OLED evo ai 4K TV", "LG", 265990.00, 10, ProductCategory.ELECTRONICS, Arrays.asList("https://www.lg.com/content/dam/channel/wcms/in/images/tvs/oled55g46la_atr_eail_in_c/gallery/new/oled55g46la-450.jpg")),
                new Product("Sony Bravia 9 Mini LED 4K TV", "Sony", 649900.00, 5, ProductCategory.ELECTRONICS, Arrays.asList("https://sony.scene7.com/is/image/sonyglobalsolutions/TVFY24_UP_PrimaryTout_0pt-image11-d?$originalDimensions$&fmt=png-alpha")),
                new Product("Samsung Neo QLED 8K QN800D Smart AI TV", "Samsung", 379990.00, 10, ProductCategory.ELECTRONICS, Arrays.asList("https://images.samsung.com/is/image/samsung/p6pim/in/qa65qn800duxxl/gallery/in-qled-qn800d-qa65qn800duxxl-540992380?$684_547_JPG$")),
                new Product("Samsung Neo QLED 4K QN800D Smart AI TV", "Samsung", 207490.00, 6, ProductCategory.ELECTRONICS, Arrays.asList("https://images.samsung.com/is/image/samsung/p6pim/in/qa65qn90daulxl/gallery/in-qled-qn90d-qa65qn90daulxl-thumb-540993190?$252_252_PNG$")),
                new Product("LG QNED AI Smart 4K TV", "LG", 125990.00, 0, ProductCategory.ELECTRONICS, Arrays.asList("https://www.lg.com/content/dam/channel/wcms/in/images/tvs/55qned82t6a-atr-eail-in-c/qned-qned80-55-a-basic-01.jpg/jcr:content/renditions/thum-350x350.jpeg")),
                new Product("Sony Bravia 8 4K Ultra HD Smart TV", "Sony", 299990.00, 2, ProductCategory.ELECTRONICS, Arrays.asList("https://sony.scene7.com/is/image/sonyglobalsolutions/TVFY24_Category_Golden_Area_UM?$goldenAreaImage$&fmt=png-alpha")),
                new Product("Samsung Crystal 4K UHD Smart TV", "Samsung", 64990.00, 0, ProductCategory.ELECTRONICS, Arrays.asList("https://images.samsung.com/is/image/samsung/p6pim/in/ua65due70bklxl/gallery/in-crystal-uhd-du7000-499586-ua65due70bklxl-thumb-540344941?$252_252_PNG$")),
                new Product("Sony Bravia 3 4K UHD Smart TV", "Sony", 114900.00, 10, ProductCategory.ELECTRONICS, Arrays.asList("https://sony.scene7.com/is/image/sonyglobalsolutions/TVFY24_Category_Golden_Area_UE?$goldenAreaImage$&fmt=png-alpha")),
                new Product("LG OLED B3 4K Smart TV", "LG", 469990.00, 0, ProductCategory.ELECTRONICS, Arrays.asList("https://www.lg.com/content/dam/channel/wcms/in/images/tvs/oled77b3psa_atrg_eail_in_c/gallery/TV-OLED-77-B3-A-Basic.jpg/jcr:content/renditions/thum-350x350.jpeg")),
                new Product("Sony Bravia A80L OLED 4K UHD Smart TV", "Sony", 249900.00, 10, ProductCategory.ELECTRONICS, Arrays.asList("https://www.sony.co.in/content/dam/sony/contents/global/televisionsandhometheatre/televisions/year-2023/sm-a80-l-a83-l-a84-l-series/slideshow/65/ww/TVFY23_A80L_65_WW_11_btyl_D.png"))
        };

        Arrays.stream(products).toList().forEach(productRepository::save);
    }
}
