import axios from "axios"



export default {
    state: {
        products: [],
        productDetail: null,
        category: '',
        comment: '',
        orderError: {
            city: null || [],
            street: null|| [],
            house_number: null|| [],
            apartment_number: null|| [],
        }
  },
    getters: {
        allProducts(state) {
            return state.products
        },
        getProductDetail(state) {
            return state.productDetail
        },
        allCategory(state) {
            return state.category
        },
        getComment(state) {
            return state.comment
        },
        getOrderError(state) {
            return state.orderError
        }
  },
    mutations: {
        updateProducts(state, products) {
            state.products = products
        },
        setProductDetail(state, product) {
            state.productDetail = product
        },
        setCategory(state, category) {
            state.category = category
        },
        setComment(state, comment) {
            state.comment = comment
        },
        addComment(state, comment) {
            state.comment.push(comment)
        },
        setError(state, orderError) {
            state.orderError = {
                city: orderError.city || [],
                street: orderError.street || [],
                house_number: orderError.house_number|| [],
                apartment_number: orderError.apartment_number|| [],
            }
        },
        clearError(state) {
            state.orderError = {
                city: [],
                street: [],
                house_number: [],
                apartment_number:  [],
            }
        }
  },
    actions: {
        async createOrder(ctx, order) {
            await axios.post(process.env.VUE_APP_API_BASE + 'api/shop/order/create',
                order,
            {
                headers: {
                    'Authorization': `Bearer ${ctx.rootGetters['getToken']}`
                }
                })
                .catch(function (errors) {
                    if (errors.response.data) {
                        ctx.commit('setError', errors.response.data)

                    }
                })
                .then(function (response) {
                    if (response) {
                        console.log(response.data.payment_confirmation_url);
                        window.location.replace(response.data.payment_confirmation_url)
                        ctx.commit('clearError')
                        ctx.commit('clearCart')
                    }
            })
        },

        async getAllProduct(ctx, search) {
            console.log(process.env.VUE_APP_API_BASE );
            const res = await (await axios.get(process.env.VUE_APP_API_BASE + `api/shop/product/all?search=${search || ''}`)).data
            ctx.commit('updateProducts', res)
        },
        async getDetailProduct(ctx, productId) {
            const res = await (await axios.get(process.env.VUE_APP_API_BASE +`api/shop/product/${productId}`)).data
            ctx.commit('setProductDetail', res)
        },
        async getAllCategory(ctx) {
            const res = await (await axios.get(process.env.VUE_APP_API_BASE + `api/shop/category`)).data
            ctx.commit('setCategory', res)
        },
        async getComment(ctx, product_id) {
            const res = await (await axios.get(process.env.VUE_APP_API_BASE + `api/shop/product/comment/${product_id}`)).data
            ctx.commit('setComment', res)
        },
        async createComment(ctx, {comment, product}) {
            console.log(product.id);
            const res = await (await axios.post( process.env.VUE_APP_API_BASE + `api/shop/product/comment/create`,
                {
                    text: comment,
                    product: product.id
                },
                      {
            headers: {'Authorization': `Bearer ${ctx.rootGetters['getToken']}`},
          })).data
            console.log(res);
            ctx.commit('addComment', res)
        }
    },
  modules: {

  }
}
