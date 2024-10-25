
/* Autogenerated file, do not edit! */

/* eslint-disable */
import {
  type AbiType,
  AztecAddress,
  type AztecAddressLike,
  CompleteAddress,
  Contract,
  type ContractArtifact,
  ContractBase,
  ContractFunctionInteraction,
  type ContractInstanceWithAddress,
  type ContractMethod,
  type ContractStorageLayout,
  type ContractNotes,
  decodeFromAbi,
  DeployMethod,
  EthAddress,
  type EthAddressLike,
  EventSelector,
  type FieldLike,
  Fr,
  type FunctionSelectorLike,
  L1EventPayload,
  loadContractArtifact,
  type NoirCompiledContract,
  NoteSelector,
  Point,
  type PublicKey,
  type UnencryptedL2Log,
  type Wallet,
  type WrappedFieldLike,
} from '@aztec/aztec.js';
import VerifiableCredentialModuleContractArtifactJson from './target/vc_module-VerifiableCredentialModule.json' assert { type: 'json' };
export const VerifiableCredentialModuleContractArtifact = loadContractArtifact(VerifiableCredentialModuleContractArtifactJson as NoirCompiledContract);



/**
 * Type-safe interface for contract VerifiableCredentialModule;
 */
export class VerifiableCredentialModuleContract extends ContractBase {
  
  private constructor(
    instance: ContractInstanceWithAddress,
    wallet: Wallet,
  ) {
    super(instance, VerifiableCredentialModuleContractArtifact, wallet);
  }
  

  
  /**
   * Creates a contract instance.
   * @param address - The deployed contract's address.
   * @param wallet - The wallet to use when interacting with the contract.
   * @returns A promise that resolves to a new Contract instance.
   */
  public static async at(
    address: AztecAddress,
    wallet: Wallet,
  ) {
    return Contract.at(address, VerifiableCredentialModuleContract.artifact, wallet) as Promise<VerifiableCredentialModuleContract>;
  }

  
  /**
   * Creates a tx to deploy a new instance of this contract.
   */
  public static deploy(wallet: Wallet, _admin: AztecAddressLike) {
    return new DeployMethod<VerifiableCredentialModuleContract>(Fr.ZERO, wallet, VerifiableCredentialModuleContractArtifact, VerifiableCredentialModuleContract.at, Array.from(arguments).slice(1));
  }

  /**
   * Creates a tx to deploy a new instance of this contract using the specified public keys hash to derive the address.
   */
  public static deployWithPublicKeysHash(publicKeysHash: Fr, wallet: Wallet, _admin: AztecAddressLike) {
    return new DeployMethod<VerifiableCredentialModuleContract>(publicKeysHash, wallet, VerifiableCredentialModuleContractArtifact, VerifiableCredentialModuleContract.at, Array.from(arguments).slice(2));
  }

  /**
   * Creates a tx to deploy a new instance of this contract using the specified constructor method.
   */
  public static deployWithOpts<M extends keyof VerifiableCredentialModuleContract['methods']>(
    opts: { publicKeysHash?: Fr; method?: M; wallet: Wallet },
    ...args: Parameters<VerifiableCredentialModuleContract['methods'][M]>
  ) {
    return new DeployMethod<VerifiableCredentialModuleContract>(
      opts.publicKeysHash ?? Fr.ZERO,
      opts.wallet,
      VerifiableCredentialModuleContractArtifact,
      VerifiableCredentialModuleContract.at,
      Array.from(arguments).slice(1),
      opts.method ?? 'constructor',
    );
  }
  

  
  /**
   * Returns this contract's artifact.
   */
  public static get artifact(): ContractArtifact {
    return VerifiableCredentialModuleContractArtifact;
  }
  

  public static get storage(): ContractStorageLayout<'admin' | 'jwt_registry' | 'passport_address'> {
      return {
        admin: {
      slot: new Fr(1n),
    },
jwt_registry: {
      slot: new Fr(2n),
    },
passport_address: {
      slot: new Fr(3n),
    }
      } as ContractStorageLayout<'admin' | 'jwt_registry' | 'passport_address'>;
    }
    

  public static get notes(): ContractNotes<'AddressNote' | 'ValueNote'> {
    return {
      AddressNote: {
          id: new NoteSelector(2232136525),
        },
ValueNote: {
          id: new NoteSelector(1038582377),
        }
    } as ContractNotes<'AddressNote' | 'ValueNote'>;
  }
  

  /** Type-safe wrappers for the public methods exposed by the contract. */
  public declare methods: {
    
    /** compute_note_hash_and_optionally_a_nullifier(contract_address: struct, nonce: field, storage_slot: field, note_type_id: field, compute_nullifier: boolean, serialized_note: array) */
    compute_note_hash_and_optionally_a_nullifier: ((contract_address: AztecAddressLike, nonce: FieldLike, storage_slot: FieldLike, note_type_id: FieldLike, compute_nullifier: boolean, serialized_note: FieldLike[]) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** constructor(_admin: struct) */
    constructor: ((_admin: AztecAddressLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** get_admin_public() */
    get_admin_public: (() => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** get_jwt_registry() */
    get_jwt_registry: (() => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** get_passport_address() */
    get_passport_address: (() => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** is_admin() */
    is_admin: (() => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** public_dispatch(selector: field) */
    public_dispatch: ((selector: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** set_admin(new_admin: struct) */
    set_admin: ((new_admin: AztecAddressLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** set_jwt_registry(_registry: struct) */
    set_jwt_registry: ((_registry: EthAddressLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** set_passport_address(_passport_address: struct) */
    set_passport_address: ((_passport_address: AztecAddressLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** verify(address: struct, content: field, secret: field) */
    verify: ((address: AztecAddressLike, content: FieldLike, secret: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;
  };

  
}
