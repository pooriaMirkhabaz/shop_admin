import ICategoryAttribute from './ICategoryAttribute'

export default interface ICategoryGroup {
    hash : string;
    title : string;
    attributes : ICategoryAttribute[]
}
